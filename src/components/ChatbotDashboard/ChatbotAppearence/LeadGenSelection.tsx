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
          {[
            "name_lead_gen",
            "mail_lead_gen",
            "phone_lead_gen",
            "message_lead_gen",
          ].map((name: string) => {
            const is_active = `is_${name}`;
            const required = `required_${name}`;
            return (
              <div
                key={name}
                className="flex w-full flex-wrap justify-between items-center  gap-4"
              >
                <label className="text-gray-800 rounded-lg flex flex-col text-left text-xs">
                  <p className="sr-only">Is Active</p>
                  <input type="checkbox" {...register(is_active)} />
                </label>

                <label className="flex-1 min-w-max text-gray-800">
                  {name}:
                  <input
                    type="text"
                    className="w-full text-base p-2 outline-1 outline-gray-300 rounded-lg"
                    placeholder={`Enter ${name}`}
                    value={watch(name)}
                    {...register(name)}
                  />
                </label>

                <label className="relative inline-flex items-center cursor-pointer mt-1">
                  <input
                    type="checkbox"
                    {...register(required)}
                    checked={watch(required)}
                    className="sr-only peer"
                  />
                  <div className="w-12 h-6 bg-[#9592AD] rounded-full peer-checked:bg-[#9592AD] transition-colors duration-300"></div>
                  <div className="absolute left-1 top-1 bg-black w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-6"></div>
                </label>
              </div>
            );
          })}
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
