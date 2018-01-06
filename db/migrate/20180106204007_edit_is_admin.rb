class EditIsAdmin < ActiveRecord::Migration[5.1]
  def change
    rename_column :users, :is_admin?, :is_admin
  end
end
