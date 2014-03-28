class CreateWeathers < ActiveRecord::Migration
  def change
    create_table :weathers do |t|
      t.string :city
      t.float :temp

      t.timestamps
    end
  end
end
