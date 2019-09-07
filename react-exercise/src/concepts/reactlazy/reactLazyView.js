import React, {lazy, Suspense} from 'react';

const LoginView = lazy(() => import('../../components/loginView'));

function ReactLazyView(){
    return (
        <div>
           <Suspense fallback={<div>Loading component ...</div>}>
                <LoginView />
           </Suspense>
        </div>
    );
}

export default ReactLazyView;