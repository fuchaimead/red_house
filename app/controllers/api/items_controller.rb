class Api::ItemsController < ApplicationController
  before_action :set_items, except: [:index, :index_cart, :create ]

  def index
    render json: Item.all
  end

  def index_cart
    render json: current_user.items
  end

  def create
    item = Item.new(item_params)
    if item.save
      render json: item
    else
      json_error(item)
    end
  end

  def update
    if @item.update(item_params)
    else
      render json_error(@item)
    end
  end

  def destroy
    save_item = @item
    @item.destroy
    render json: save_item
  end

  private

  def item_params
    params.require(:item).permit(:name, :price, :description, :quantity, :user_id)
  end

  def set_items
    @item = Item.find(params[:id])
  end
end
