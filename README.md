**This is Description for my test**
My challenge is #1

# 1.Front end

## 1.1 Project Structure

In my front-end project, in _/src_, i have folder with its feature:

1. _components_: all component rendered
2. _pages_: main page to navigate
3. _styles_: include all _.css_ file, i don't use framework for styling with this project
4. _utils_: some function help to work with data

## 1.2 Feature

### 1.2.1 Feature completed

- Code authentication
- Generate caption from scratch
- Generate idea
- Generate caption from idea

### 1.2.2 Feature not completed

- Save content/idea
- Unsave content/idea
- Resend access code.
- Share content

## 1.3 UI

1. With phone number input, i have notify if it not includes all number
   ![Phone authentication](/images/phone-auth.png)

2. Code authentication
   ![Code authentication](/images/code-auth.png)

3. Dashboard
   ![Dashboard](/images/dashboard.png)

4. Create from scratch
   ![Scratch](/images/scratch1.png)

5. Generated caption
   ![Scratch](/images/caption-scratch.png)

6. Generated idea
   ![idea](/images/idea-generate.png)
7. Generate caption from idea
   ![idea](/images/idea-to-caption.png)

# 2. Backend

## 2.1 Project structure

1. _controller_: all function controller
2. _models_: class for data
3. _routes_: route definition

## 2.2 Feature

### 2.2.1 Feature completed

- Generate 6-digit code and save to database
- Code/phone authentication
- Generate caption from scratch
- Generate idea
- Generate caption from idea
- Save caption/idea
- UnSave caption/idea

### 2.2.2 Feature not completed

- Send SMS message to phone number
- Handle text from Gemini AI not good

## 2.3 Database structure

I need 2 collection in Firebase:

- caption: all caption is saved, each document have 3 field: data, topic, phoneNumber
- user: all user registed, each document have 2 field: phoneNumber, accessCode

# Finally,

I think my front-end code is harder to focus than back-end, some codes is not logic.
It is the first time i work with Firebase, so the codes to interact with firebase, i think it not good

I know that i late, but can you give me review of my code, i think i need to improve more.
