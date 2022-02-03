import './about.css'

const AboutPage = () => {

    return (
        <div className='aboutContainer'>
            <h1 className='header'>About unTokd</h1>
            <p className='p'>unTokd: the social weedia network is a student project built with React/Redux and Express. I built this site because of my personal fondness for cannabis and its social features. The cannabis community is growing, and the industry is booming in a country where not every state has chosen to legalize marijuana.</p>
            <img className='infographic' src='https://www.aclu.org/sites/default/files/styles/scale_1200w/public/8938990977_3117563051_o.jpg?itok=nuM5hPk8' />
            <p className='p'>An estimated 40 thousand Americans are incarcerated for cannabis-related offenses - imprisoned for recreational drug use - when the whole country can't even agree if the drug should be illegal. American states spend on average $3.5 billion every year enforcing the criminalization of marijuana, when California and Colorado alone made $1 billion in weed sales taxes in 2020. Solidarity within the cannabis community includes speaking out for those who don't have a voice for themselves. Please join unTokd in its goal to support the federal decriminalization of cannabis, and the release of 40,000 people from prison for non-violent offenses. </p>
            <img className='infographic' src='https://www.aclu.org/sites/default/files/styles/scale_1200w/public/8938235410_4da847166f_o.jpg?itok=NRgexWV2' />
            <p className='p'>Click <a className='linky' href='https://www.aclu.org/gallery/marijuana-arrests-numbers'>here</a> for more information about marijuana enforcement, and talk to your representatives about what decriminalizing cannabis means to you.</p>
        </div>
    )
}

export default AboutPage
