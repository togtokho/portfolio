import ProjectPage from '@/components/ProjectPage'
import TwitchImage from '/public/assets/projects/twitch.jpg'

const technologies = [
  'React',
  'Tailwind',
  'Javascript',
  'Firebase',
  'Google API',
  'Zillow API'
]

const TwitchPage = () => {
  return (
    <ProjectPage
      title={'Twitch UI'}
      description={'React JS / Tailwind / Firebase'}
      coverImage={TwitchImage}
      technologies={technologies}
    >
      I built this app to demonstrate knowledge working in React JS and
      accessing API endpoints. This app was built using React JS and is
      hosted on Firebase. This application supports user authentication
      using firebase. Users are able to create a new account using their
      email address and can then sign in to save coins to a user specific
      list. This is made possble by creating a firestore cloud storage
      database at the time of user registration. Another feature of this
      application is dynamic routing through the &quot;React Router DOM&quot;
      package. This application was built using the Coin Gecko API.
    </ProjectPage>
  )
}

export default TwitchPage
