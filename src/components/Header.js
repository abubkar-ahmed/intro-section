import React from 'react'

function Header() {
    const [navBar , setNavBar] = React.useState(true);
    const [features, setFeatures] = React.useState(true);
    const [compony, setCompony] = React.useState(true);

  return (
    <header className='header'>
        <img src='./images/logo.svg' alt='logo' className='logo'/>
        <img src='./images/icon-menu.svg' alt='menu' onClick={() => setNavBar(prevN => !prevN) } className='menu'/>
        {/* navigation */}
        <nav className={navBar ? 'hidden ' : 'nav'}>
            {/* navigation main container */}
            <div className='nav-main-container'>
                <img src='./images/icon-close-menu.svg' alt='close' onClick={() => setNavBar(prevN => !prevN) } className='close'/>
                {/* main navigation list */}
                <ul className='main-nav-list'>
                    <li>
                        <div  onClick={() => setFeatures(prevF => !prevF)}>
                            Features
                            <img src={features ? './images/icon-arrow-down.svg' : './images/icon-arrow-up.svg'} alt='arrow-down'></img>
                        </div>
                        {/* Features navigation list */}
                        <ul className={features ? 'hidden ' : 'fetures'}>
                            <li>
                                <img src='./images/icon-todo.svg' alt='to-do'/>
                                Todo List
                            </li>
                            <li >
                                <img src='./images/icon-calendar.svg' alt='calendar' />
                                Calender
                            </li>
                            <li >
                                <img src='./images/icon-reminders.svg' alt='reminders' />
                                Reminders
                            </li>
                            <li>
                                <img src='./images/icon-planning.svg' alt='planning' />
                                Planning
                            </li>
                        </ul>
                    </li>
                    <li >
                        <div onClick={() => setCompony(prevC => !prevC)}>
                            Company
                            <img src={compony ? './images/icon-arrow-down.svg' : './images/icon-arrow-up.svg'} alt='arrow-down' ></img>
                        </div>
                        {/* compony navigation list */}
                        <ul className={compony ? 'hidden' : ''}>
                            <li >History</li>
                            <li >Our Team</li>
                            <li >Blog</li>
                        </ul>
                    </li>
                    <li >Careers</li>
                    <li >About</li>
                </ul>
                {/* Buttons */}
                <div className='buttons'>
                    <button className='login'>Login</button>
                    <button className='register'>Register</button>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header