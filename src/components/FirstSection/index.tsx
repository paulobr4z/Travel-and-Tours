import { HeaderContainer, HeaderWrapper } from './styles'

interface IFirstSection {
  title: string;
  hasButton?: boolean;
}

export function FirstSection({
  title = 'Title',
  hasButton = false,
}: IFirstSection) {
  return (
    <HeaderContainer >
      <HeaderWrapper>
        <h1>{title}</h1>
        <h2>
          Lorem ipsum is placeholder text commonly used in
          the graphic, print, and publishing industries.
        </h2>
        {
          hasButton &&
            <div>
              <button>CONTACT</button>
            </div>
        }
      </HeaderWrapper>
    </HeaderContainer>
  )
  
}