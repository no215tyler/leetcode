require 'json'

def two_sum(nums, target)
  result = {}
  nums.each_with_index do |num, index|
    diff_num = target - num
    if result.has_key?(diff_num)
      return [result[diff_num], index]
    end
    result[num] = index
  end
  return []
end
nums = gets.chomp
nums = JSON.parse(nums)
target = gets.chomp.to_i

puts two_sum(nums, target).inspect
