import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2 bg-amber-50">
        <Link to="/" className="[&.active]:font-bold text-accent">
          Home
        </Link>
        <Link to="/about" className="[&.active]:font-bold  text-accent">
          About
        </Link>
        <Link to='/test' className='[&.active]:font-bold  text-accent'>
          Test
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})