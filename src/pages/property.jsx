import ProjectPage from '@/components/ProjectPage'
import PropertyImage from '/public/assets/projects/property.jpg'

const technologies = [
  'React',
  'Tailwind',
  'Javascript',
  'Firebase',
  'Google API',
  'Zillow API'
]

const PropertyPage = () => {
  return (
    <ProjectPage
      title={'Property Finder'}
      description={'React JS / Tailwind / Firebase'}
      coverImage={PropertyImage}
      technologies={technologies}
    >
      This app was built using React JS and is hosted on Firebase. Users
      are able to search properties based on an Address, City, or ZIP code
      to retrieve a list of active properties currently for sale. You will
      be able to view property information as well as the specific
      location of the property integrated with the Google Maps API. User
      authentication is available so you can signup and signin to your
      account with an email address in order to save your favorite
      properties. This is made possible with Zillow API.
    </ProjectPage>
  )
}

export default PropertyPage
