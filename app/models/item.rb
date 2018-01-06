class Item < ApplicationRecord
  belongs_to :user
  validates_presence_of :name, :price, :description, :quantity
  validates_uniqueness_of :name
end
