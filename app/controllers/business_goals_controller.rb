class BusinessGoalsController < ApplicationController
  # before_action :set_business_goal, only: [:show, :edit, :update, :destroy]
  before_action :set_business_goal, only: [:show, :update, :destroy]

  def index
    @business_goals = BusinessGoal.all

    render json: @business_goals
  end

  def show
    render json: @business_goal
  end

  def new
    @business_goal = BusinessGoal.new
  end

  def edit
  end

  def create
    @business_goal = BusinessGoal.new(business_goal_params)

    if @business_goal.save
      render json: @business_goal, status: :created, location: @business_goal
    else
      render json: @business_goal.errors, status: :unprocessable_entity
    end
  end

  def update
    if @business_goal.update(business_goal_params)
      render json: @business_goal
    else
      render json: @business_goal.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @business_goal.destroy
  end

  private

    def set_business_goal
      @business_goal = BusinessGoal.find(params[:id])
    end

    def business_goal_params
      params.require(:business_goal).permit(
        :name,
        :question_1,
        :question_2,
        :question_3,
        :question_4,
        :image,
        :remove_image
      )
    end
end
