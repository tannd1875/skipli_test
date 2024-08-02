const firebase = require("../firebase");
const {
  getFirestore,
  collection,
  doc,
  getDocs,
  setDoc,
} = require("firebase/firestore");

const db = getFirestore(firebase);

const CreateNewAccessCode = async (req, res) => {
  try {
    const newAccessCode = Math.floor(Math.random() * 900000) + 100000;
    const phoneNumber = req.body.phoneNumber;

    const userCol = collection(db, "user");
    const userAccessCodeRef = doc(userCol, phoneNumber);
    await setDoc(userAccessCodeRef, {
      phoneNumber: phoneNumber,
      accessCode: newAccessCode.toString(),
    });
    res.send("Update access Code " + newAccessCode + " successfully!");
    return newAccessCode;
  } catch (error) {
    res.status(400).send(error);
  }
};

const ValidateAccessCode = async (req, res) => {
  try {
    let flag = false;
    const userAccessCode = req.body.accessCode;
    const userPhoneNumber = req.body.phoneNumber;

    const userCol = collection(db, "user");
    const userSnapshot = await getDocs(userCol);
    userSnapshot.docs.map((doc) => {
      if (
        doc.data().phoneNumber == userPhoneNumber &&
        doc.data().accessCode == userAccessCode
      ) {
        res
          .status(200)
          .send(
            "Validate " +
              userPhoneNumber +
              " successfully by code " +
              userAccessCode
          );
        flag = true;
        return true;
      }
    });
    if (flag) {
      const userAccessCodeRef = doc(userCol, userPhoneNumber);
      await setDoc(userAccessCodeRef, {
        accessCode: "",
        phoneNumber: userPhoneNumber,
      });
    }
    res.send("Wrong access code!");
    return false;
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { CreateNewAccessCode, ValidateAccessCode };
