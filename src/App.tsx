import goalsImage from "./assets/goals.jpg";
import CourseGoalList from "./components/CourseGoalList.tsx";
import Header from "./components/Header.tsx";
import { useState } from "react";
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoalType = {
  title: string;
  desc: string;
  id: string;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoalType[]>([]);

  const handleAddGoal = (newGoal: CourseGoalType) => {
    setGoals((prevsGoals) => {
      return [...prevsGoals, newGoal];
    });
  };

  const handleDeleteGoal = (id: string) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <main>
      <Header image={{ src: goalsImage, alt: "A List of goals" }}>
        <h1>Your Course goal</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDleteGoal={handleDeleteGoal} />
    </main>
  );
}

//40 - starts
