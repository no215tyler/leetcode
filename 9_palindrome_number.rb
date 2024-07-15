def is_palindrome(x)
  x = x.to_s.split('')
  reverse_x = x.reverse
  for i in (0...x.length)
    if x[i] != reverse_x[i]
      return false
    end
  end
  return true
end

x = gets.to_i
puts is_palindrome(x)
