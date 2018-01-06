class Item < ApplicationRecord
  belongs_to :user, optional: true
  validates_presence_of :name, :price, :description, :quantity
  validates_uniqueness_of :name
end
