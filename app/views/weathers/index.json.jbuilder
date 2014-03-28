json.array!(@weathers) do |weather|
  json.extract! weather, :id, :city, :temp
  json.url weather_url(weather, format: :json)
end
