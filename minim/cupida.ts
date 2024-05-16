// Define a type representing all possible grades, which includes specific names and nullable types.
type AllPossibleGrades = 'Dave' | 'John' | null | undefined;

// Function to validate if the input is an acceptable grade.
function isValidGrade(grade: AllPossibleGrades): boolean {
  // List of valid grade names.
  const validGrades: string[] = ['Dave', 'John'];

  // Check if the grade is either a valid name or a nullable type.
  return validGrades.includes(grade as string) || grade === null || grade === undefined;
}

// Example usage of the isValidGrade function.
const exampleGrade: AllPossibleGrades = 'Dave';
console.log(`Is "${exampleGrade}" a valid grade?`, isValidGrade(exampleGrade));
