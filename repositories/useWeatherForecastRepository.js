import useSWR from 'swr'

function useWeatherForecastRepository() {
  const { data, error } = useSWR('https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json', {
    dedupingInterval: 10000,
  })

  return {
    data: data,
    isLoading: !data && !error,
    isError: error,
  }
}

export default useWeatherForecastRepository
