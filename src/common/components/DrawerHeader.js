import { DrawerLink } from './DrawerRouter'

function DrawerHeader ({ category, title, onClose }) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {category ? <p className="text-zinc-400">{category}</p> : <div />}
        <DrawerLink
          to=".."
          className="text-zinc-400 hover:text-zinc-500"
        >
          X
        </DrawerLink>
      </div>
      <h2 className="text-2xl font-bold capitalize">{title}</h2>
    </div>
  )
}

export default DrawerHeader
