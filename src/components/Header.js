import logo from '../assets/investment-calculator-logo.png'
export default function Header() {
    return (
        <header className='header'>
        <img src={logo} alt="" />
        <h2 className='heading'>Investment Calculator</h2>
        </header>
    )
}