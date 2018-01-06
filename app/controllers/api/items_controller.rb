class Api::ItemsController < ApplicationController
  before_action :set_bootcamp, except: [:index ]

  def index
    render json: Item.all
  end

  def update
    if @item.update(item_params)
      render json: @item
    else
      render json_error(@item)
    end
  end

  private

  def item_params
    params.require(:item).permit(:name, :price, :description, :quantity, :user_id)
  end
end
