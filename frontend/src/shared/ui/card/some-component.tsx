import { Button } from '../button/button'
import { Card } from './card'

type Props = {}

function SomeComponent(props: Props) {
  const handleMagicClick = () => {
    console.log('кнопка нажата!')
  }

  return (
    <div>
      {/* Очень много верстки */}
      <Card title='Товар 1'>
        <div>обычная карточка номер 1</div>
      </Card>
      {/* Очень много верстки */}
      <Card title='Товар 2'>
        <div>
          <span>необычная</span> карточка номер 2
        </div>
        <Button size='lg' onClick={handleMagicClick}>
          с кнопкой
        </Button>
      </Card>
      {/* Очень много верстки */}
    </div>
  )
}

export { SomeComponent }

