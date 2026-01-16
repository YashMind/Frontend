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
    <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-4 w-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="font-medium text-white text-base">
            Lead Generation
          </h2>
          <p className="text-sm text-white/60">
            Gather leads before or during chatbot interaction
          </p>
        </div>

        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            {...register("lead_collection")}
            checked={watch("lead_collection")}
            className="sr-only peer"
          />
          <div className="w-12 h-6 bg-[#9592AD] rounded-full peer-checked:bg-indigo-600 transition-colors duration-300"></div>
          <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-6"></div>
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
                  className="flex flex-col gap-4 p-4 bg-white/5 rounded-lg border border-white/10 shadow-sm"
                >
                  {/* Field activation toggle */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-white">
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
                      <label className="block text-sm font-medium text-white uppercase">
                        {name}
                        {watch(required) && (
                          <span className="text-red-400 ml-1">*</span>
                        )}
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-white/10 bg-white/5 text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 placeholder-white/30"
                        placeholder={`Enter ${name.toLowerCase()}`}
                        {...register(`${name}_lead_gen` as any)}
                      />

                      {/* Required toggle */}
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-sm text-white/60">
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
          <div className="space-y-4 pt-2">
            <label className="flex-1 min-w-max text-white block">
              <span className="mb-2 block text-sm font-medium">Submission message heading:</span>
              <textarea
                cols={2}
                className="w-full text-base p-3 bg-white/5 border border-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/50 placeholder-white/30"
                placeholder={`Enter message heading`}
                value={watch("submission_message_heading_lead_gen")}
                {...register("submission_message_heading_lead_gen")}
              />
            </label>
            <label className="flex-1 min-w-max text-white block">
              <span className="mb-2 block text-sm font-medium">Submission message:</span>
              <textarea
                rows={4}
                className="w-full text-base p-3 bg-white/5 border border-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/50 placeholder-white/30"
                placeholder={`Enter message`}
                value={watch("sumbission_message_lead_gen")}
                {...register("sumbission_message_lead_gen")}
              />
            </label>
            <label className="flex-1 min-w-max text-white block">
              <span className="mb-2 block text-sm font-medium">Submit button text:</span>
              <input
                type="text"
                className="w-full text-base p-3 bg-white/5 border border-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/50 placeholder-white/30 mb-4"
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
