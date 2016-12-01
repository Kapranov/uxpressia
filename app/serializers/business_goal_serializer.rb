class BusinessGoalSerializer < ActiveModel::Serializer
  attributes :id, :name, :question_1, :question_2, :question_3, :question_4, :image_data, :created_at, :updated_at
end
