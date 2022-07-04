import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames'

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
  showSidebar: string;
  setShowSidebar: (string: string) => void
}

export const Lessons = (props: LessonProps) => {
  const { slug } = useParams<{ slug: string }>()
  const isLessonAvailable = isPast(props.availableAt)
  const availableDateFromatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR
  })

  const handleClick = () => {
    props.setShowSidebar('hidden')
  }

  const isActiveLesson = slug === props.slug

  return ( //FIX: redirect video 2 to video 1 bugged
    <Link to={`/event/lesson/${props.slug}`} className='group' onClick={handleClick} >
      <span className="text-gray-300">
        {availableDateFromatted}
      </span>

      <div className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500', {
        'bg-green-500': isActiveLesson,
      })}>
        {/* <div className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${isActiveLesson ? 'bg-green-500' : ''}`}> */}
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className={classNames("text-sm font-medium flex items-center gap-2", {
              'text-blue-500': !isActiveLesson,
              'text-white': isActiveLesson
            })}>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className="text-sm rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className={classNames("mt-5 block", {
          'text-gray-200': !isActiveLesson,
          'text-white': isActiveLesson,
        })}>
          {props.title}
        </strong>
      </div>
    </Link>
  )
}
