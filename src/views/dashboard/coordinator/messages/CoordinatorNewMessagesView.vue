<template>
  <div class="card card-primary card-outline" style="height: 610px">
    <div class="card-body p-0">
      <div class="table-responsive mailbox-messages">
        <div class="login-form" style="height: auto">
          <form style="margin-top: 0%"></form>
          <input type="hidden" name="" />

          <div class="card-body" style="height: 420px; color: #1b6068">
            <div class="form-group mb-2">
              <label for="academic_id">Contacts:</label>
              <select
                class="form-control"
                id="academic_id"
                name="academic_id"
                data-placeholder="From group section you should choose course or advisory to access the list."
                style="width: 100%; box-shadow: none"
              >
                <option value="">Choose one</option>
                <option value="58">Doç. Dr. TÜRKER TEKİN ERGÜZEL</option>
                <option value="262">Dr. Öğr. Üyesi KRİSTİN SURPUHİ BENLİ</option>
                <option value="22141">Prof. Dr. BURHAN PEKTAŞ</option>
                <option value="40299">Dr. Öğr. Üyesi BELAYNESH CHEKOL</option>
                <option value="51871">Dr. Öğr. Üyesi GAMZE USLU</option>
                <option value="60273">Öğr. Gör. GÜLSÜN GENCER</option>
              </select>
            </div>
            <div class="form-group mb-2">
              <label for="course_id">Course:</label>
              <select
                class="form-control"
                id="course_id"
                name="course_id"
                data-placeholder="From group section you should choose course or advisory to access the list."
                style="width: 100%; box-shadow: none"
              >
                <option value="">Choose one</option>
                <option value="23114">Image Processing&nbsp;(COME407/1)</option>
                <option value="23206">German II&nbsp;(GER124/2)</option>
                <option value="23343">Numerical Analysis&nbsp;(MATH302/1)</option>
                <option value="23344">Software Project Management&nbsp;(SE302/1)</option>
                <option value="23345">Summer Practice II&nbsp;(SE384/1)</option>
                <option value="23342">Emerging Technologies&nbsp;(SE406/1)</option>
              </select>
            </div>
            <div class="form-group mb-2">
              <label for="subject">Subject:</label>
              <input
                type="text"
                class="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
                value=""
              />
            </div>

            <div class="form-group mb-2">
              <label for="post">Message:</label>
              <textarea
                id="post"
                name="post"
                class="form-control ckeditor"
                placeholder="Message"
                style="max-height: 98px; min-height: 98px"
              ></textarea>
            </div>

            <div class="form-group mb-4">
              <label for="files">File:</label>
              <small
                >(You can add multiple files by uploading one by one. Adding files is not
                mandatory.)</small
              >
              <div class="MultiFile-wrap" id="files">
                <input
                  type="file"
                  name="files[]"
                  class="form-control MultiFile-applied"
                  id="files"
                  value=""
                />
                <div class="MultiFile-list" id="files_list"></div>
              </div>
              <button
                class="mb-2 mt-2"
                type="submit"
                style="width: 30%; height: 50px; margin-left: 70%; margin-top: 20px !important"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-send"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"
                  ></path>
                </svg>
                <span>Send</span>
              </button>
            </div>
          </div>
          <!-- /.card-body -->
        </div>
        <table class="table table-striped">
          <tbody></tbody>
        </table>
      </div>
    </div>
    <!-- /.card-body -->
  </div>
</template>
