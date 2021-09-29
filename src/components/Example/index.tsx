// import { useExamplePageController } from '../../hooks/example'
import * as S from './styles'

interface ExampleProps {
  title?: string
  description?: string
}

const Example: React.FC<ExampleProps> = ({
  title = 'Boilerplae NextJS',
  description = 'Typescript, ReactJS, NextJS e Styled Components'
}) => {
  // const { users, loading } = useExamplePageController()

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  )
}

export default Example
