class CreatePersonas < ActiveRecord::Migration[5.0]
  def change
    create_table :personas do |t|
      t.string :name
      t.text :question_1
      t.text :question_2
      t.text :question_3
      t.text :question_4

      t.timestamps
    end
  end
end
