type Props<T> = {
  list: T[],

}

function List<T>({list}: Props<T>) {

  return (
    <ul>{list.map(item => <li key={item.id}></li>)}</ul>
  )
}

export { List }