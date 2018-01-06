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
