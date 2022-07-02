import { useGetLessonsQuery } from "../graphql/generated"
import { Lessons } from "./Lessons"

interface SidebarProps {
  showSidebar: string;
  setShowSidebar: (string: string) => void
}

export const Sidebar = (props: SidebarProps) => {
  const { data } = useGetLessonsQuery()

  return (
    <aside className={`w-full lg:w-[348px] bg-gray-700 p-6 border-l border-gray-600 absolute inset-0 lg:relative lg:block z-10 ${props.showSidebar}`}>
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aula
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => {
          return (
            <Lessons
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
              showSidebar={props.showSidebar}
              setShowSidebar={props.setShowSidebar}
            />
          )
        })}
      </div>
    </aside>
  )
}
