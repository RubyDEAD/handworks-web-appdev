import LandingLayout from '@/components/layouts/landing-layout'
import { createRootRoute,useRouter } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

//  function LoadingLayout(){
//     <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
//       <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
//     </div>
//  }
 function NotFoundComponent() {
  const router = useRouter();
  router.history.back();
  return <></>;
}

function ErrorComponent() {
  return <div>Something went wrong</div>;
}

  

export const Route = createRootRoute({
  component:RootComponent, 
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
})

function RootComponent(){
   const getCurrentLayout = () => {
    return <LandingLayout/>
  };


 return (
  // TODO: add auth logic
  <div>
    {getCurrentLayout()};
    <TanStackRouterDevtools/>
  </div>
 )
}