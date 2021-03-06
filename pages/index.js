import useWeatherForecastRepository from '../repositories/useWeatherForecastRepository'
import AppHeader from '../components/AppHeader'

export default function Home() {
  const { data, isLoading, isError } = useWeatherForecastRepository()
  return (
    <div>
      <AppHeader />
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error!</div>
      ) : (
        <div>
          {JSON.stringify(data)}
        </div>
      )}
    </div>
  )
}
