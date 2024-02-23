// import {type ReactNode } from "react"; // use "type" **
// import { type FC, PropsWithChildren } from "react"; //
import { PropsWithChildren } from "react"; //
// interface CourseGoalProps {
//   title: string;
//   children: ReactNode; //**
// }
//OR

type CourseGoalProps = PropsWithChildren<{
  title: string;
  id: string;
  onDelete: (id: string) => void;
}>;

function CourseGoal({ title, onDelete, id, children }: CourseGoalProps) {
  // children**
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}
//OR
// const CourseGoal: FC<CourseGoalProps> = ({
//   title,
//   children,
// }: CourseGoalProps) => {
//   // children**
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };

export default CourseGoal;
