class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :name, null: false
      t.float :price, null: false
      t.text :description, null: false
      t.integer :quantity, null: false
      t.belongs_to :user, foreign_key: true
      t.timestamps
    end
  end
end



