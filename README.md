# TataSteel-JobFinder

# Project Report: JobKhojo - A Job Finder Application

## Project Overview

JobKhojo is a web-based application designed to assist job seekers in managing and submitting their personal information, work experience, skills, and resumes efficiently. Developed using React, JobKhojo features a user-friendly interface that simplifies the job application process by ensuring all necessary information is collected and validated before submission.

## Functionalities

### 1. Personal Details Form

The `PersonalDetails` component allows users to enter and manage their personal information. This includes:

- **First Name:** Text input for the user's first name.
- **Last Name:** Text input for the user's last name.
- **Mobile Number:** Text input for the user's mobile number.
- **Email:** Text input for the user's email address.
- **Date of Birth:** Date picker for selecting the user's date of birth.
- **Gender:** Dropdown select for choosing the user's gender.
- **Nationality:** Text input for the user's nationality.
- **Languages Known:** Text input for the languages the user knows.

The form uses the state to manage the form data and updates the parent component's state using the `setFormData` function.

### 2. Resume Upload

The `ResumeUpload` component allows users to upload their resume. This includes:

- **File Input:** Allows users to select a file from their device.
- **Resume Display:** Displays the uploaded resume's name.
- **Remove Button:** Allows users to remove the uploaded resume.

The component updates the parent component's state with the selected file and provides functionality to remove the file if needed.

### 3. Skills Management

The `Skills` component enables users to add and manage their skills. This includes:

- **Skill Input:** Text input for entering a skill.
- **Add Skill Button:** Button to add the entered skill to the list.
- **Skill List Display:** Displays the list of added skills.
- **Remove Skill Button:** Allows users to remove a skill from the list.
- **Error Handling:** Displays an error message if the user tries to add more than 10 skills.

This component uses state to manage the list of skills and updates the parent component's state accordingly.

### 4. Work Experience Management

The `WorkExperience` component allows users to add and manage their work experiences. This includes:

- **Start Date:** Date picker for selecting the start date of the work experience.
- **End Date:** Date picker for selecting the end date of the work experience.
- **Present Checkbox:** Checkbox to indicate if the user is currently working at the job.
- **Company Name:** Text input for entering the company name.
- **Description:** Text area for describing the work experience.
- **Add Experience Button:** Button to add the work experience to the list.
- **Experience List Display:** Displays the list of added work experiences.
- **Remove Experience Button:** Allows users to remove a work experience from the list.
- **Total Work Experience Calculation:** Calculates and displays the total work experience in years.

This component uses state to manage the individual work experiences and updates the parent component's state accordingly. It also includes logic to calculate the total work experience based on the entered data.

### 5. Form Validation and Submission

The main component, `App`, integrates all the individual components (`PersonalDetails`, `ResumeUpload`, `Skills`, and `WorkExperience`) into a cohesive form. This includes:

- **State Management:** Maintains the overall form data state.
- **Form Validation:** Ensures that all required fields are filled out before submission.
- **Submit Button:** Triggers form validation and submission.

The form submission is simulated with a delay to mimic actual submission handling, and an alert is displayed to confirm successful submission.

## Technologies Used

- **React:** The primary library used for building the user interface.
- **React DatePicker:** A date picker component used for selecting dates.
- **Tailwind CSS:** A utility-first CSS framework used for styling the application.

## Code Quality and Structure

The project code is well-structured, with each component encapsulating a specific piece of functionality. The use of functional components and hooks (like `useState` and `useEffect`) adheres to modern React best practices. The state management is handled efficiently, ensuring that the form data is consistently updated and validated.

## Future Enhancements

- **Backend Integration:** Connect the form to a backend service to handle actual form submissions and store user data.
- **Form Validation Library:** Implement a form validation library like `Formik` or `Yup` for more robust validation.
- **User Authentication:** Add user authentication to allow users to save and manage their profiles.
- **Enhanced UI/UX:** Improve the user interface with more interactive elements and better styling.

## Conclusion

JobKhojo is a comprehensive job finder application that simplifies the job application process by providing a well-structured and user-friendly interface. The modularity and scalability of the codebase make it easy to extend and enhance the application with additional features in the future. This project showcases the effective use of React and modern web development practices to create a functional and efficient tool for job seekers.
