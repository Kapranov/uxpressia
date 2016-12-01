class CreateUserStories < ActiveRecord::Migration[5.0]
  def change
    create_table :user_stories do |t|
      t.integer :iteration
      t.integer :jira
      t.string :value
      t.string :estimate
      t.integer :business_weight
      t.boolean :done

      t.timestamps
    end
  end
end
