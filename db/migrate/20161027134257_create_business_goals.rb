class CreateBusinessGoals < ActiveRecord::Migration[5.0]
  def change
    create_table :business_goals do |t|
      t.string :name
      t.text :question_1
      t.text :question_2
      t.text :question_3
      t.text :question_4
      t.text :image_data

      t.timestamps
    end
  end
end
