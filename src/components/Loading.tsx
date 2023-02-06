import { Center, Spinner } from 'native-base'

export const Loading = () => {
  return (
    <Center flex={1} bg='bg.900'>
      <Spinner color='primary.500' />
    </Center>
      
  )
}