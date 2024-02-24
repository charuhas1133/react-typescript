import { useRef, type FormEvent } from "react";
import { CourseGoalType } from "../App";

type NewGoalProps = {
  onAddGoal: (newGoal: CourseGoalType) => void;
};
const NewGoal: React.FC<NewGoalProps> = ({ onAddGoal }: NewGoalProps) => {
  const goalRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);
  /*  Explainination<HTMLInputElement>
   Null value: When you initialize a useRef hook, you typically set its initial value to null. This is because initially, the reference doesn't point to any DOM element. Later, when the component renders and the DOM elements are created, React updates the reference to point to the actual DOM element. So, by setting it to null initially, you indicate that it doesn't reference anything yet.

    <HTMLInputElement> type assertion: In TypeScript, useRef is a generic function. This means you can specify the type of the value that the reference will point to. When you use useRef<HTMLInputElement>(null), you're explicitly specifying that the reference will point to an <input> element. This type assertion helps TypeScript to know that the reference points to an <input> element and enables you to access properties specific to <input> elements, like value or checked, without TypeScript complaining about potential type mismatches. 
   */

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    /* *** FormEvent ****
    -We specify the type of e as FormEvent. This tells TypeScript that "event" is a form-related event object and provides TypeScript with information about the properties and methods available on the event object.
    -This helps TypeScript to provide accurate type checking and autocomplete suggestions when you access properties or methods on the event object inside the handleSubmit function.
    */
    event.preventDefault();

    /* same example....
     const textValue = textInputRef.current?.value || '';
    const numberValue = Number(numberInputRef.current?.value) || 0;
    const emailValue = emailInputRef.current?.value || '';
    const checkboxValue = checkboxInputRef.current?.checked || false;
    */
    const currentGoal = goalRef.current!.value;
    const currentSummry = summaryRef.current!.value;
    // new FormData(event.currentTarget);
    onAddGoal({
      title: currentGoal,
      desc: currentSummry,
      id: self.crypto.randomUUID(),
    });

    event.currentTarget.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input type="text" id="goal" ref={goalRef} required />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input type="text" id="summary" ref={summaryRef} required />
      </p>
      <p>
        <button type="submit">Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
