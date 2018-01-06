class Api::ItemsController < ApplicationController
  before_action :set_items, except: [:index ]

  def index
    response = [Item.all, current_user.id]
    render json: response
  end

  def index_cart
    render json: current_user.items
  end

  def update
    if @item.update(item_params)
    else
      render json_error(@item)
    end
  end

  private

  def item_params
    params.require(:item).permit(:name, :price, :description, :quantity, :user_id)
  end

  def set_items
    @item = Item.find(params[:id])
  end
end
