@bookings.each do |booking|
  json.set! booking.id do
    json.extract! booking, :id, :spot_id, :user_id, :check_in, :check_out, :num_guests
    json.spot booking.spot
    json.image_url booking.spot.image.url
    json.user booking.user
  end
end
