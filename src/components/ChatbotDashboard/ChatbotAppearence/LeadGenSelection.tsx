import React from "react";
import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { ColorPickerField, IFormInput } from "./Fields";

const LeadGenSelection = ({
  register,
  watch,
}: {
  register: UseFormRegister<IFormInput>;
  watch: UseFormWatch<IFormInput>;
}) => {
  const lead_gen = watch("lead_collection");
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="font-medium text-gray-900 text-base">
            Lead Generation
          </h2>
          <p className="text-sm text-[#727272]">
            Collect leads either before or during a conversation
          </p>
        </div>

        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            {...register("lead_collection")}
            checked={watch("lead_collection")}
            className="sr-only peer"
          />
          <div className="w-12 h-6 bg-[#9592AD] rounded-full peer-checked:bg-[#9592AD] transition-colors duration-300"></div>
          <div className="absolute left-1 top-1 bg-black w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-6"></div>
        </label>
      </div>

      {lead_gen && (
        <div className="space-y-2">
          {["name", "mail", "phone", "message"].map(
            (name: any, index: number) => {
              const is_active: any = `is_${name}_lead_gen`;
              const required: any = `required_${name}_lead_gen`;
              return (
                <div
                  key={index}
                  className="flex flex-col gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm"
                >
                  {/* Field activation toggle */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">
                      Enable {name} field
                    </span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        {...register(is_active)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-indigo-600 transition-colors duration-200"></div>
                      <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 peer-checked:translate-x-5"></div>
                    </label>
                  </div>

                  {/* Field input */}
                  {watch(is_active) && (
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700 uppercase">
                        {name}
                        {watch(required) && (
                          <span className="text-red-500 ml-1">*</span>
                        )}
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 text-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder={`Enter ${name.toLowerCase()}`}
                        {...register(`${name}_lead_gen` as any)}
                      />

                      {/* Required toggle */}
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-sm text-gray-600">
                          Required field
                        </span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            {...register(required)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-indigo-600 transition-colors duration-200"></div>
                          <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 peer-checked:translate-x-5"></div>
                        </label>
                      </div>
                    </div>
                  )}
                </div>
              );
            }
          )}
          <div>
            <label className="flex-1 min-w-max text-gray-800">
              Submission message heading:
              <textarea
                cols={2}
                className="w-full text-base p-2 outline-1 outline-gray-300 rounded-lg"
                placeholder={`Enter message heading`}
                value={watch("submission_message_heading_lead_gen")}
                {...register("submission_message_heading_lead_gen")}
              />
            </label>
            <label className="flex-1 min-w-max text-gray-800">
              Submission message:
              <textarea
                rows={4}
                className="w-full text-base p-2 outline-1 outline-gray-300 rounded-lg"
                placeholder={`Enter message`}
                value={watch("sumbission_message_lead_gen")}
                {...register("sumbission_message_lead_gen")}
              />
            </label>
            <label className="flex-1 min-w-max text-gray-800">
              Submit button text:
              <input
                type="text"
                className="w-full text-base p-2 outline-1 outline-gray-300 rounded-lg"
                placeholder={`Submit`}
                value={watch("submit_text_lead_gen")}
                {...register("submit_text_lead_gen")}
              />
              <ColorPickerField
                name="submit_button_color_lead_gen"
                label="Submit button color"
                register={register}
                defaultValue={watch("submit_button_color_lead_gen")}
              />
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadGenSelection;
