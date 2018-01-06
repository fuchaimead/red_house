require 'rails_helper'

RSpec.describe Item, type: :model do
  
  context 'validations and association of an item' do
    describe 'associations' do
      it { should belong_to(:user) }
end

    describe 'validations' do
      it { should validate_presence_of(:name)}
      it { should validate_presence_of(:price)}
      it { should validate_presence_of(:description)}
      it { should validate_presence_of(:quantity)}
    end
  end
end      
