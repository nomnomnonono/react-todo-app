import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

function MainLayout({children} : {children: React.ReactNode}) {
    return (
        <div className="w-1/2 mx-auto my-10">
            <Header />
                {children}
            <Footer />
        </div>
    );
}

export default MainLayout;
