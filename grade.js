// Grading validation function
document
  .getElementById("gradingForm") //grade -----if ni integer
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the entered grade
    const grade = parseInt(document.getElementById("grade").value);

    // const grade = 90;

    // let grade = 20;
    // Validate the grade and show appropriate messages
    if (grade >= 0 && grade <= 40) {
      console.log("repeat phase 0");
      alert("Grade: E\nMessage: Repeat phase 0.");
    } else if (grade >= 41 && grade <= 49) {
      console.log("proceed on probation");
      alert("Grade: D\nMessage: Proceed on probation.");
    } else if (grade >= 50 && grade <= 59) {
      console.log("proceed on probabtion");
      alert("Grade: C\nMessage: Proceed on probation.");
    } else if (grade >= 60 && grade <= 69) {
      console.log("Congratulations proceed to next phase");
      alert(
        "Grade: B\nMessage: Congratulations, you can now proceed to the next phase."
      );
    } else if (grade >= 70 && grade <= 100) {
      console.log("C ongratulations proceed to next phase");                  //90 (70 and 100)
      alert(
        "Grade: A\nMessage: Congratulations, you can now proceed to the next phase."
      );
    } else {
      console.log("invalid input, Please contact your TM");
      alert("Invalid input. Please contact your TM.");
    }
  });

// const grade = parseInt(document.getElementById("gradeForm"));
// integer-->datatype (any whole number)
// student ----- grade 50
