require 'rails_helper'

RSpec.describe Item, type: :model do
  
  context 'association of an item' do
    describe 'associations' do
      it { should have_many(:items) }
    end
  end
end