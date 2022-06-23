import { gql, useQuery } from '@apollo/client'

const GET_LESSONS_QUERY = gql`
  query {
    lesson {
      id,
      title
    }
  }
`

interface Lesson {
  id: string;
  title: string;
}

export const App = () => {
  // const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY) //alternative typescrip
  const { data } = useQuery(GET_LESSONS_QUERY)

  return (
    <>
      <ul>
        {data?.lessons.map((lesson: Lesson) => {
          return <li key={lesson.id}>{lesson.title}</li>
        })}
      </ul>
    </>
  )
}
