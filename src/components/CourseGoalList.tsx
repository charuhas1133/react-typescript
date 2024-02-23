import { type FC } from "react";
import CourseGoal from "./CourseGoal";
import { CourseGoalType } from "../App";

type CourseGoalProps = {
  goals: CourseGoalType[];
  onDleteGoal: (id: string) => void;
};

const CourseGoalList: FC<CourseGoalProps> = ({ goals, onDleteGoal }) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title} onDelete={onDleteGoal} id={goal.id}>
            <p>{goal.desc}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
