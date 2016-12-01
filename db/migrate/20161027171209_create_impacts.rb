class CreateImpacts < ActiveRecord::Migration[5.0]
  def change
    create_table :impacts do |t|
      t.string :name

      t.timestamps
    end
  end
end
